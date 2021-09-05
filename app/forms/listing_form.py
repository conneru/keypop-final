from flask_wtf import FlaskForm
from wtforms import StringField,SelectField,IntegerField,BooleanField
from wtforms.validators import DataRequired,ValidationError

def descript_length(form,field):
        description = field.data
        if len(description) > 500:
            raise ValidationError('This field must be less than 500 characters')

def url_length(form,field):
        image = field.data
        if len(image) > 500:
            raise ValidationError('This field must be less than 500 characters')
def price_length(form,field):
    price = field.data
    if price > 999999999:
        raise ValidationError('This field must be less than $1,000,000,000')
    elif price < 1:
        raise ValidationError('This field must be at least $1')


class ListingForm(FlaskForm):
    userId = StringField('userId',validators=[DataRequired()])
    description = StringField('description',validators=[DataRequired(),descript_length])
    price = IntegerField('price',validators=[DataRequired(),price_length])
    image = StringField('image',validators=[DataRequired(),url_length])
    condition = SelectField('condition',choices=[('Factory New','Factory New'),('Minimal Wear','Minimal Wear'),('Field-Tested','Field-Tested'),('Well-Worn','Well-Worn'),("Battle-Scarred","Battle-Scarred")],validators=[DataRequired()])
    category = SelectField('category', choices=[('Keyboard','Keyboard'),('Case','Case'),('Switches','Switches'),('PCB','PCB'),('Keycaps','Keycaps')],validators=[DataRequired()])
    subcategory = SelectField('category', choices=[('TKL (80%)','TKL (80%)'),('Full-Size','Full-Size'),('75%','75%'),('65%','65%'),('60%','60%'),('40%','40%'),('Other','Other'),('',''),(None,None)])
    purchaserId =IntegerField('purchaserId')
    sold = BooleanField('sold')



