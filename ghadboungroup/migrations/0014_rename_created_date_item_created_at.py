# Generated by Django 4.2.4 on 2024-05-30 16:42

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('ghadboungroup', '0013_item_created_date_alter_item_description'),
    ]

    operations = [
        migrations.RenameField(
            model_name='item',
            old_name='created_date',
            new_name='created_at',
        ),
    ]