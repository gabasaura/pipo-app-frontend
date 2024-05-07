import { useState } from 'react';

const PasswordStrengthChecker = () => {
    const [password, setPassword] = useState('');
    const [strength, setStrength] = useState('');
    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        setStrength(checkPasswordStrength(newPassword));
    };
    const checkPasswordStrength = (password) => {
        // Revisa la longitud de la contraseña
        if (password.length < 8) {
            return 'Weak';
        }
        // Revisa la presencia de letras mayúsculas y minúsculas
        if (!/[A-Z]/.test(password) || !/[a-z]/.test(password)) {
            return 'Weak';
        }
        // Revisa la presencia de números
        if (!/\d/.test(password)) {
            return 'Weak';
        }
        // Revisa la presencia de caracteres especiales
        if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(password)) {
            return 'Media';
        }
        // Si pasa todas las condiciones, la contraseña se considera fuerte
        return 'Strong';
    };
    return (
        <div>

            <div className="col-6 mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input 
                type="password" 
                className="form-control" 
                id="password" 
                value={password} 
                onChange={handlePasswordChange} />
            </div>
            <p>Strength: {strength}</p>
        </div>
    );
};
export default PasswordStrengthChecker;