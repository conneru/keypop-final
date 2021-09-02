from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from wtforms.fields.html5 import EmailField
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')

def name_length(form,field):
    username = field.data
    if len(username) > 40:
        raise ValidationError('Username must be less than 40 characters.')
    elif len(username) < 4:
        raise ValidationError('Username must be more than 3 characters')
def pass_length(form,field):
    password = field.data
    if len(password) > 40:
        raise ValidationError('Password must be less than 20 characters.')
    elif len(password) < 4:
        raise ValidationError('Password must be more than 3 characters')


def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('Username is already in use.')

def password_matches(form,field):
    confirmPassword = field.data
    password = form.data['password']
    if password != confirmPassword:
        raise ValidationError('Passwords don\'t match')


class SignUpForm(FlaskForm):
    username = StringField(
        'username', validators=[DataRequired(), username_exists,name_length])
    email = EmailField('email', validators=[DataRequired(),Email(), user_exists])
    password = StringField('password', validators=[DataRequired(),pass_length])
    confirmPassword=StringField('Confirm Password', validators=[password_matches])
