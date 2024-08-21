import React, { useState } from 'react';

export const UpdateProfile = () => {
  // حالة الحقول والرسائل الخطأ
  const [formData, setFormData] = useState({
    name: '',
    major: '',
    phone: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    major: '',
    phone: '',
    password: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // دالة لمعالجة التغييرات في الحقول
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // دالة للتحقق من صحة البيانات
  const validate = () => {
    const newErrors = {};
    if (!formData.name || formData.name.length < 2 || formData.name.length > 50) {
      newErrors.name = 'Name must be between 2 and 50 characters';
    }
    if (!formData.major || formData.major.length < 2 || formData.major.length > 50) {
      newErrors.major = 'Major must be between 2 and 50 characters';
    }
    if (!formData.phone || !/^\d+$/.test(formData.phone) || formData.phone.length < 10 || formData.phone.length > 15) {
      newErrors.phone = 'Phone number must be between 10 and 15 digits';
    }
    if (!formData.password || formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // تحقق من عدم وجود أخطاء
  };

  // دالة لمعالجة تقديم النموذج
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // هنا يمكنك إرسال البيانات إلى الخادم
      console.log('Form data:', formData);

      // بعد التقديم الناجح، عرض نافذة منبثقة
      setTimeout(() => {
        setIsSubmitting(false);
        setShowModal(true);
      }, 1000); // تأخير بسيط لمحاكاة زمن إرسال البيانات

      // قم بإعادة تعيين الحقول بعد الإرسال إذا لزم الأمر
      // setFormData({ name: '', major: '', phone: '', password: '' });
    }
  };

  // دالة لإغلاق النافذة المنبثقة
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="max-w-md mx-auto mt-32 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Update Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-primary">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm sm:text-sm ${
              errors.name ? 'border-red-500' : ''
            }`}
            placeholder="Enter your name"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-primary">Major</label>
          <input
            type="text"
            name="major"
            value={formData.major}
            onChange={handleChange}
            className={`mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm sm:text-sm ${
              errors.major ? 'border-red-500' : ''
            }`}
            placeholder="Enter your major"
          />
          {errors.major && <p className="text-red-500 text-sm">{errors.major}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-primary">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm sm:text-sm ${
              errors.phone ? 'border-red-500' : ''
            }`}
            placeholder="Enter your phone number"
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-primary">New Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={`mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm sm:text-sm ${
              errors.password ? 'border-red-500' : ''
            }`}
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>
        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary text-white p-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            {isSubmitting ? 'Submitting...' : 'Update Profile'}
          </button>
        </div>
      </form>

      {/* نافذة منبثقة عند نجاح التقديم */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm mx-auto">
            <h3 className="text-lg font-bold mb-4">Success!</h3>
            <p className="text-gray-700 mb-4">Your profile has been updated successfully.</p>
            <button
              onClick={handleCloseModal}
              className="w-full bg-primary text-white p-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
