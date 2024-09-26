from rest_framework import serializers
from .models import Baker, Customer

class BakerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Baker
        fields = ('pk', 'name', 'email', 'phone', 'registrationDate','photo')


class CustomerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Customer
        fields = ('pk', 'name', 'phone', 'registrationDate')
