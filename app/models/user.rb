class User < ApplicationRecord
  validates :username, presence: true, uniqueness: true
  validates :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true
  # pw should be at least 6 chars upon creation, but will be nil when taken from db (not saved)
  validates :password, length: {minimum: 6, allow_nil: true}

  before_validation :ensure_session_token

  # needed to validate pw length
  attr_reader :password

  # upon user creation overwrites user#password; stores pw_digest instead of pw
  def password=(password)
    @password = password 
    self.password_digest = BCrypt::Password.create(password)
  end

  # check if pw matches pw_digest on record
  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  # generates session_token using SecureRandom library
  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end

  # used in app controller for login/logout
  def reset_session_token
    self.session_token = SecureRandom::urlsafe_base64
    self.save!
    self.session_token
  end

  # used in sessions controller to validate login
  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)

    if user && user.is_password?(password)
      user 
    else
      nil
    end
  end

end
