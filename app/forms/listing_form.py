from flask_wtf import FlaskForm
from wtforms import StringField,SelectField,IntegerField
from wtforms.validators import DataRequired,ValidationError

class ListingForm(FlaskForm):
    userId = StringField('userId',validators=[DataRequired()])
    description = StringField('description',validators=[DataRequired()])
    price = IntegerField('price',validators=[DataRequired()])
    image = StringField('image',validators=[DataRequired()])
    condition = SelectField('condition',choices=[('Factory New','Factory New'),('Minimal Wear','Minimal Wear'),('Field-Tested','Field-Tested'),('Well-Worn','Well-Worn')],validators=[DataRequired()])
    category = SelectField('category', choices=[('Keyboard','Keyboard'),('Case','Case'),('Switches','Switches'),('PCB','PCB'),('Keycaps','Keycaps')],validators=[DataRequired()])
    subcategory = SelectField('category', choices=[('tkl','TKL (80%)'),('full','Full-Size(100%)'),('75','75%'),('65','65%'),('60','60%'),('40','40%'),('other','other'),('','')])
