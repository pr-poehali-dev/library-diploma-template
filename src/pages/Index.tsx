import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    participantName: '',
    eventName: 'Литературный марафон',
    date: new Date().toLocaleDateString('ru-RU'),
  });

  const handlePrint = () => {
    window.print();
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 no-print">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2 animate-fade-in">
            Генератор дипломов
          </h1>
          <p className="text-gray-600 text-lg">
            Создайте современный диплом за несколько секунд
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="p-6 shadow-xl no-print animate-scale-in">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Icon name="Edit" size={28} className="text-primary" />
              Заполните данные
            </h2>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="participantName" className="text-base font-semibold">
                  ФИО участника
                </Label>
                <Input
                  id="participantName"
                  placeholder="Иванов Иван Иванович"
                  value={formData.participantName}
                  onChange={(e) => handleChange('participantName', e.target.value)}
                  className="mt-2 text-lg"
                />
              </div>

              <div>
                <Label htmlFor="eventName" className="text-base font-semibold">
                  Название мероприятия
                </Label>
                <Input
                  id="eventName"
                  placeholder="Литературный марафон"
                  value={formData.eventName}
                  onChange={(e) => handleChange('eventName', e.target.value)}
                  className="mt-2 text-lg"
                />
              </div>

              <div>
                <Label htmlFor="date" className="text-base font-semibold">
                  Дата
                </Label>
                <Input
                  id="date"
                  value={formData.date}
                  onChange={(e) => handleChange('date', e.target.value)}
                  className="mt-2 text-lg"
                />
              </div>

              <Button
                onClick={handlePrint}
                className="w-full text-lg py-6 mt-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover-scale"
              >
                <Icon name="Printer" size={24} className="mr-2" />
                Распечатать диплом
              </Button>
            </div>
          </Card>

          <div className="flex items-center justify-center">
            <div 
              id="diploma"
              className="relative w-full max-w-[600px] aspect-[1/1.414] bg-white shadow-2xl overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)'
              }}
            >
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full translate-y-1/2 -translate-x-1/2"></div>
              </div>

              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 opacity-80 rounded-br-full"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-pink-400 to-purple-500 opacity-80 rounded-tl-full"></div>

              <div className="relative h-full p-12 flex flex-col">
                <div className="flex items-start justify-between mb-8">
                  <img 
                    src="https://cdn.poehali.dev/files/c12c3a3e-0576-4ed1-a2fc-22dbbef34f3d.JPG" 
                    alt="Логотип библиотеки"
                    className="h-20 object-contain bg-white px-3 py-1 rounded-lg shadow-lg"
                  />
                  <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                    <div className="text-3xl">🏆</div>
                  </div>
                </div>

                <div className="flex-1 flex flex-col justify-center items-center text-center">
                  <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl max-w-xl w-full">
                    <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                      ДИПЛОМ
                    </h2>
                    
                    <p className="text-gray-700 text-lg mb-6">
                      награждается
                    </p>

                    <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-4 mb-6 min-h-[60px] flex items-center justify-center">
                      <p className="text-2xl font-bold text-gray-800">
                        {formData.participantName || 'Введите ФИО участника'}
                      </p>
                    </div>

                    <p className="text-gray-700 text-lg mb-3">
                      за участие в мероприятии
                    </p>

                    <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-4 mb-6 min-h-[60px] flex items-center justify-center">
                      <p className="text-xl font-semibold text-gray-800">
                        {formData.eventName}
                      </p>
                    </div>

                    <div className="flex items-center justify-center gap-2 text-gray-600">
                      <Icon name="Calendar" size={20} />
                      <p className="text-lg font-medium">{formData.date}</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-end mt-8">
                  <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-lg shadow-lg">
                    <div className="border-t-2 border-gray-400 pt-2 min-w-[200px] text-center">
                      <p className="text-sm text-gray-600">Подпись директора</p>
                    </div>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg">
                    <div className="text-4xl">📚</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;