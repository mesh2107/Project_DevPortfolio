from django.db import migrations, models

def set_default_user(apps, schema_editor):
    Intro = apps.get_model('myportfolio', 'Intro')
    Register = apps.get_model('myportfolio', 'Register')
    
    # Get default user or create one if none exists
    default_user = Register.objects.first()
    if not default_user:
        default_user = Register.objects.create(
            name="Default User",
            email="default@example.com",
            password="defaultpassword"
        )
    
    # Update all null user fields
    Intro.objects.filter(user__isnull=True).update(user=default_user)

def reverse_default_user(apps, schema_editor):
    Intro = apps.get_model('myportfolio', 'Intro')
    Intro.objects.filter(user__isnull=False).update(user=None)

class Migration(migrations.Migration):
    dependencies = [
        ('myportfolio', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(set_default_user, reverse_default_user),
        migrations.AlterField(
            model_name='intro',
            name='user',
            field=models.OneToOneField(
                'Register',
                on_delete=models.CASCADE,
                related_name='intro',
                null=False
            ),
        ),
    ]