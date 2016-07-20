class ContactMailer < ApplicationMailer
  default from: 'notifications@example.com'

  def confirm_email(contact)
    @contact = contact
    @url  = 'ribon.io'
    mail(to: @contact.email, subject: 'Welcome to My Awesome Site')
  end

end
