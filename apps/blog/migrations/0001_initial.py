# Generated by Django 3.1.7 on 2021-03-14 06:42

import ckeditor.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('date_added', models.DateField(auto_now_add=True)),
                ('background_image', models.ImageField(upload_to='static/img')),
                ('content', ckeditor.fields.RichTextField()),
            ],
            options={
                'ordering': ['id'],
            },
        ),
    ]
