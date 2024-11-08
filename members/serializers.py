from rest_framework import serializers
from .models import TeamMember
import re

class TeamMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeamMember
        fields = '__all__'

    def validate(self, data):
        # Phone number validation: allow different formats
        phone_number = data.get('phone_number')
        phone_regex = r'^(?:\(\d{3}\)\s?|\d{3}-?)\d{3}-?\d{4}$'

        if not re.fullmatch(phone_regex, phone_number):
            raise serializers.ValidationError({
                "phone_number": "Phone number must be in the format 123-456-7890, (123) 456-7890, or 1234567890."
            })

        # Email uniqueness validation
        email = data.get('email')
        if TeamMember.objects.filter(email=email).exists():
            raise serializers.ValidationError({"email": "This email is already in use."})

        return data

