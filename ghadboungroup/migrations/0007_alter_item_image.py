# Generated by Django 4.2.4 on 2024-05-02 10:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ghadboungroup', '0006_item_category'),
    ]

    operations = [
        migrations.AlterField(
            model_name='item',
            name='image',
            field=models.ImageField(blank=True, upload_to='./src/components/static/images'),
        ),
    ]
