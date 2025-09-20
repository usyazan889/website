import React, { useState } from 'react';
import { 
  Settings, 
  Eye, 
  EyeOff, 
  Edit, 
  Trash2, 
  Plus, 
  Save, 
  X, 
  LogOut,
  Palette,
  Type,
  Image,
  DollarSign
} from 'lucide-react';
import { useAdmin } from '../contexts/AdminContext';

const AdminDashboard = () => {
  const { 
    services, 
    siteSettings, 
    logout, 
    updateService, 
    toggleServiceVisibility, 
    updateSiteSettings,
    addService,
    deleteService
  } = useAdmin();

  const [activeTab, setActiveTab] = useState<'services' | 'settings'>('services');
  const [editingService, setEditingService] = useState<string | null>(null);
  const [showAddService, setShowAddService] = useState(false);
  const [editingSettings, setEditingSettings] = useState(false);

  const [newService, setNewService] = useState({
    title: '',
    description: '',
    category: '',
    image: '',
    technologies: '',
    price: '',
    visible: true
  });

  const [tempSettings, setTempSettings] = useState(siteSettings);

  const handleServiceUpdate = (id: string, field: string, value: any) => {
    updateService(id, { [field]: value });
  };

  const handleAddService = () => {
    if (newService.title && newService.description) {
      addService({
        ...newService,
        technologies: newService.technologies.split(',').map(t => t.trim())
      });
      setNewService({
        title: '',
        description: '',
        category: '',
        image: '',
        technologies: '',
        price: '',
        visible: true
      });
      setShowAddService(false);
    }
  };

  const handleSettingsUpdate = () => {
    updateSiteSettings(tempSettings);
    setEditingSettings(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-6xl h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-emerald-600 text-white p-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">لوحة تحكم المدير</h1>
          <button
            onClick={logout}
            className="flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 px-4 py-2 rounded-lg transition-colors duration-200"
          >
            <LogOut className="h-4 w-4" />
            تسجيل الخروج
          </button>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 dark:border-gray-700">
          <div className="flex">
            <button
              onClick={() => setActiveTab('services')}
              className={`px-6 py-3 font-medium ${
                activeTab === 'services'
                  ? 'border-b-2 border-emerald-600 text-emerald-600'
                  : 'text-gray-600 dark:text-gray-300 hover:text-emerald-600'
              }`}
            >
              إدارة الخدمات
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`px-6 py-3 font-medium ${
                activeTab === 'settings'
                  ? 'border-b-2 border-emerald-600 text-emerald-600'
                  : 'text-gray-600 dark:text-gray-300 hover:text-emerald-600'
              }`}
            >
              إعدادات الموقع
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 h-full overflow-y-auto">
          {activeTab === 'services' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">إدارة الخدمات</h2>
                <button
                  onClick={() => setShowAddService(true)}
                  className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors duration-200 flex items-center gap-2"
                >
                  <Plus className="h-4 w-4" />
                  إضافة خدمة جديدة
                </button>
              </div>

              {/* Add Service Modal */}
              {showAddService && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl w-full max-w-2xl">
                    <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">إضافة خدمة جديدة</h3>
                    <div className="space-y-4">
                      <input
                        type="text"
                        placeholder="عنوان الخدمة"
                        value={newService.title}
                        onChange={(e) => setNewService({...newService, title: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg"
                      />
                      <textarea
                        placeholder="وصف الخدمة"
                        value={newService.description}
                        onChange={(e) => setNewService({...newService, description: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg h-24"
                      />
                      <input
                        type="text"
                        placeholder="الفئة"
                        value={newService.category}
                        onChange={(e) => setNewService({...newService, category: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg"
                      />
                      <input
                        type="text"
                        placeholder="رابط الصورة"
                        value={newService.image}
                        onChange={(e) => setNewService({...newService, image: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg"
                      />
                      <input
                        type="text"
                        placeholder="التقنيات (مفصولة بفواصل)"
                        value={newService.technologies}
                        onChange={(e) => setNewService({...newService, technologies: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg"
                      />
                      <input
                        type="text"
                        placeholder="السعر"
                        value={newService.price}
                        onChange={(e) => setNewService({...newService, price: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg"
                      />
                    </div>
                    <div className="flex gap-4 mt-6">
                      <button
                        onClick={handleAddService}
                        className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors duration-200"
                      >
                        إضافة
                      </button>
                      <button
                        onClick={() => setShowAddService(false)}
                        className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors duration-200"
                      >
                        إلغاء
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Services List */}
              <div className="space-y-4">
                {services.map((service) => (
                  <div key={service.id} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        {editingService === service.id ? (
                          <div className="space-y-3">
                            <input
                              type="text"
                              value={service.title}
                              onChange={(e) => handleServiceUpdate(service.id, 'title', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-600 dark:text-white rounded"
                            />
                            <textarea
                              value={service.description}
                              onChange={(e) => handleServiceUpdate(service.id, 'description', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-600 dark:text-white rounded h-20"
                            />
                            <div className="grid grid-cols-2 gap-3">
                              <input
                                type="text"
                                value={service.category}
                                onChange={(e) => handleServiceUpdate(service.id, 'category', e.target.value)}
                                placeholder="الفئة"
                                className="px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-600 dark:text-white rounded"
                              />
                              <input
                                type="text"
                                value={service.price}
                                onChange={(e) => handleServiceUpdate(service.id, 'price', e.target.value)}
                                placeholder="السعر"
                                className="px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-600 dark:text-white rounded"
                              />
                            </div>
                            <input
                              type="text"
                              value={service.image}
                              onChange={(e) => handleServiceUpdate(service.id, 'image', e.target.value)}
                              placeholder="رابط الصورة"
                              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-600 dark:text-white rounded"
                            />
                            <input
                              type="text"
                              value={service.technologies.join(', ')}
                              onChange={(e) => handleServiceUpdate(service.id, 'technologies', e.target.value.split(',').map(t => t.trim()))}
                              placeholder="التقنيات (مفصولة بفواصل)"
                              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-600 dark:text-white rounded"
                            />
                          </div>
                        ) : (
                          <div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white">{service.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300 mt-1">{service.description}</p>
                            <div className="flex gap-4 mt-2 text-sm text-gray-500 dark:text-gray-400">
                              <span>الفئة: {service.category}</span>
                              <span>السعر: {service.price}</span>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-2">
                              {service.technologies.map((tech, index) => (
                                <span key={index} className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded text-xs">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                      
                      <div className="flex gap-2 ml-4">
                        <button
                          onClick={() => toggleServiceVisibility(service.id)}
                          className={`p-2 rounded ${service.visible ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}
                        >
                          {service.visible ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                        </button>
                        
                        <button
                          onClick={() => setEditingService(editingService === service.id ? null : service.id)}
                          className="p-2 bg-blue-100 text-blue-600 rounded hover:bg-blue-200"
                        >
                          {editingService === service.id ? <X className="h-4 w-4" /> : <Edit className="h-4 w-4" />}
                        </button>
                        
                        <button
                          onClick={() => deleteService(service.id)}
                          className="p-2 bg-red-100 text-red-600 rounded hover:bg-red-200"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">إعدادات الموقع</h2>
                <button
                  onClick={() => setEditingSettings(!editingSettings)}
                  className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors duration-200 flex items-center gap-2"
                >
                  {editingSettings ? <X className="h-4 w-4" /> : <Settings className="h-4 w-4" />}
                  {editingSettings ? 'إلغاء' : 'تعديل الإعدادات'}
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Site Identity */}
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <Type className="h-5 w-5" />
                    هوية الموقع
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">اسم الموقع</label>
                      <input
                        type="text"
                        value={editingSettings ? tempSettings.siteName : siteSettings.siteName}
                        onChange={(e) => setTempSettings({...tempSettings, siteName: e.target.value})}
                        disabled={!editingSettings}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-600 dark:text-white rounded disabled:bg-gray-100 dark:disabled:bg-gray-800"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">عنوان الصفحة الرئيسية</label>
                      <input
                        type="text"
                        value={editingSettings ? tempSettings.heroTitle : siteSettings.heroTitle}
                        onChange={(e) => setTempSettings({...tempSettings, heroTitle: e.target.value})}
                        disabled={!editingSettings}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-600 dark:text-white rounded disabled:bg-gray-100 dark:disabled:bg-gray-800"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">النص التوضيحي</label>
                      <textarea
                        value={editingSettings ? tempSettings.heroSubtitle : siteSettings.heroSubtitle}
                        onChange={(e) => setTempSettings({...tempSettings, heroSubtitle: e.target.value})}
                        disabled={!editingSettings}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-600 dark:text-white rounded disabled:bg-gray-100 dark:disabled:bg-gray-800 h-20"
                      />
                    </div>
                  </div>
                </div>

                {/* Colors */}
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <Palette className="h-5 w-5" />
                    الألوان
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">اللون الأساسي</label>
                      <div className="flex gap-2">
                        <input
                          type="color"
                          value={editingSettings ? tempSettings.primaryColor : siteSettings.primaryColor}
                          onChange={(e) => setTempSettings({...tempSettings, primaryColor: e.target.value})}
                          disabled={!editingSettings}
                          className="w-12 h-10 border border-gray-300 rounded disabled:opacity-50"
                        />
                        <input
                          type="text"
                          value={editingSettings ? tempSettings.primaryColor : siteSettings.primaryColor}
                          onChange={(e) => setTempSettings({...tempSettings, primaryColor: e.target.value})}
                          disabled={!editingSettings}
                          className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-600 dark:text-white rounded disabled:bg-gray-100 dark:disabled:bg-gray-800"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">اللون الثانوي</label>
                      <div className="flex gap-2">
                        <input
                          type="color"
                          value={editingSettings ? tempSettings.secondaryColor : siteSettings.secondaryColor}
                          onChange={(e) => setTempSettings({...tempSettings, secondaryColor: e.target.value})}
                          disabled={!editingSettings}
                          className="w-12 h-10 border border-gray-300 rounded disabled:opacity-50"
                        />
                        <input
                          type="text"
                          value={editingSettings ? tempSettings.secondaryColor : siteSettings.secondaryColor}
                          onChange={(e) => setTempSettings({...tempSettings, secondaryColor: e.target.value})}
                          disabled={!editingSettings}
                          className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-600 dark:text-white rounded disabled:bg-gray-100 dark:disabled:bg-gray-800"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">معلومات الاتصال</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">البريد الإلكتروني</label>
                      <input
                        type="email"
                        value={editingSettings ? tempSettings.contactEmail : siteSettings.contactEmail}
                        onChange={(e) => setTempSettings({...tempSettings, contactEmail: e.target.value})}
                        disabled={!editingSettings}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-600 dark:text-white rounded disabled:bg-gray-100 dark:disabled:bg-gray-800"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">رقم الهاتف</label>
                      <input
                        type="tel"
                        value={editingSettings ? tempSettings.contactPhone : siteSettings.contactPhone}
                        onChange={(e) => setTempSettings({...tempSettings, contactPhone: e.target.value})}
                        disabled={!editingSettings}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-600 dark:text-white rounded disabled:bg-gray-100 dark:disabled:bg-gray-800"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">العنوان</label>
                      <input
                        type="text"
                        value={editingSettings ? tempSettings.contactAddress : siteSettings.contactAddress}
                        onChange={(e) => setTempSettings({...tempSettings, contactAddress: e.target.value})}
                        disabled={!editingSettings}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-600 dark:text-white rounded disabled:bg-gray-100 dark:disabled:bg-gray-800"
                      />
                    </div>
                  </div>
                </div>

                {/* About Text */}
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">نص حول الشركة</h3>
                  <textarea
                    value={editingSettings ? tempSettings.aboutText : siteSettings.aboutText}
                    onChange={(e) => setTempSettings({...tempSettings, aboutText: e.target.value})}
                    disabled={!editingSettings}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-600 dark:text-white rounded disabled:bg-gray-100 dark:disabled:bg-gray-800 h-32"
                  />
                </div>
              </div>

              {editingSettings && (
                <div className="flex gap-4 mt-6">
                  <button
                    onClick={handleSettingsUpdate}
                    className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors duration-200 flex items-center gap-2"
                  >
                    <Save className="h-4 w-4" />
                    حفظ التغييرات
                  </button>
                  <button
                    onClick={() => {
                      setTempSettings(siteSettings);
                      setEditingSettings(false);
                    }}
                    className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors duration-200"
                  >
                    إلغاء
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;