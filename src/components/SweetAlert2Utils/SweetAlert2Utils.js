// SweetAlert2Utils.js
import Swal from 'sweetalert2';

/**
 * Shows a customizable SweetAlert2 pop-up.
 * @param {string} icon - 'success', 'error', 'warning', 'info', 'question'
 * @param {string} title - The title text.
 * @param {string} text - The main text message.
 * @param {object} options - Additional Swal configuration options (optional).
 */
export const showCustomAlert = (icon, title, text, options = {}) => {
  Swal.fire({
    icon: icon,
    title: title,
    text: text,
    // Default styles for consistency (like in your screenshots)
    confirmButtonColor: icon === 'error' ? '#d33' : '#3085d6', 
    ...options, // Allows overriding any default option
  });
};

/**
 * Shows a confirmation dialog.
 * @param {string} title - The title text.
 * @param {string} text - The main text message (e.g., "You won't be able to revert this!").
 * @returns {Promise<Swal.SweetAlertResult>} - The result of the confirmation.
 */
export const showConfirmationAlert = (title, text) => {
    return Swal.fire({
        title: title,
        text: text,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, proceed!'
    });
};