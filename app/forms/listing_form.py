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


class ListingForm(FlaskForm):
    userId = StringField('userId',validators=[DataRequired()])
    description = StringField('description',validators=[DataRequired(),descript_length])
    price = IntegerField('price',validators=[DataRequired()])
    image = StringField('image',validators=[DataRequired(),url_length])
    condition = SelectField('condition',choices=[('Factory New','Factory New'),('Minimal Wear','Minimal Wear'),('Field-Tested','Field-Tested'),('Well-Worn','Well-Worn')],validators=[DataRequired()])
    category = SelectField('category', choices=[('Keyboard','Keyboard'),('Case','Case'),('Switches','Switches'),('PCB','PCB'),('Keycaps','Keycaps')],validators=[DataRequired()])
    subcategory = SelectField('category', choices=[('tkl','TKL (80%)'),('full','Full-Size(100%)'),('75','75%'),('65','65%'),('60','60%'),('40','40%'),('other','other'),('',''),(None,None)])
    purchaserId =IntegerField('purchaserId')
    sold = BooleanField('sold')



