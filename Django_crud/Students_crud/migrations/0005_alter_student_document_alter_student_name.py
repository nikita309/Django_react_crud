# Generated by Django 4.0.3 on 2022-04-28 07:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Students_crud', '0004_Students_crud'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='document',
            field=models.CharField(max_length=20, verbose_name='Subject'),
        ),
        migrations.AlterField(
            model_name='student',
            name='name',
            field=models.CharField(max_length=240, verbose_name='Reference Id'),
        ),
    ]
