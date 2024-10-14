$(document).ready(function() {
    $('#password').on('input', function() {
        var password = $(this).val();
        var strength = checkPasswordStrength(password);
        $('#strength').text(strength.label);
        $('#strength').removeClass('weak medium strong').addClass(strength.class);
    });
    function checkPasswordStrength(password) {
        var strength = { label: 'weak', class: 'weak' };
        if (password.length >= 8) {
            var hasUpperCase = /[A-Z]/.test(password);
            var hasLowerCase = /[a-z]/.test(password);
            var hasNumbers = /\d/.test(password);
            var hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);
            if (hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChars) {
                strength = { label: 'strong', class: 'strong' };
            }
            else if ((hasUpperCase || hasLowerCase) && (hasNumbers || hasSpecialChars)) {
                strength = { label: 'medium', class: 'medium' };
            }
        }
        return strength;
    }
});


