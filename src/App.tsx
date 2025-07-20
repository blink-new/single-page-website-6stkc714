import React, { useState } from 'react';
import { Button } from './components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);



  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [];

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-32">
            <div className="flex items-center">
              <img 
                src="/logo.png" 
                alt="عوالي طويق" 
                className="h-28 w-auto"
              />
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-right px-3 py-2 text-base font-medium transition-colors hover:text-primary text-primary"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center hero-gradient">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">

          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8">
            عوالي طويق
          </h1>
          <p className="text-2xl md:text-3xl lg:text-4xl mb-12 opacity-90 font-medium">
            فعالية واحدة ... تكفي لتعرف من نحن
          </p>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-10 w-10 text-white" />
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-16">
              من نحن
            </h2>
            <div className="space-y-8 text-gray-700 text-xl md:text-2xl leading-relaxed">
              <p>
                نحن شركة متخصصة في تنظيم الفعاليات والمؤتمرات والمعارض والحفلات بجميع أنواعها، نسعى لصناعة لحظات لا تُنسى وتجارب متكاملة تجمع بين الإبداع والدقة في التنفيذ.
              </p>
              <p>
                نقدم خدماتنا باحترافية عالية تلبي تطلعات الأفراد والمؤسسات، مع تركيزنا على أدق التفاصيل وابتكار حلول مخصصة لكل فعالية، مما يجعلنا شركاء حقيقيين في نجاح كل مناسبة.
              </p>
              <p>
                من السوق المحلي ننطلق، وبأعيننا نطمح إلى العالمية، واضعين رضا عملائنا في صميم كل ما نقوم به.
              </p>
            </div>

            {/* Vision and Mission */}
            <div className="mt-20 grid md:grid-cols-2 gap-12">
              {/* Vision */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  الرؤية
                </h3>
                <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                  أن نكون الخيار الأول والرائد في تنظيم الفعاليات، المؤتمرات، الحفلات، المعارض وفعاليات الشركات، محليًا وعالميًا، من خلال تقديم تجارب مبتكرة وعالية الجودة تفوق توقعات عملائنا.
                </p>
              </div>

              {/* Mission */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  الهدف
                </h3>
                <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                  نلتزم بتقديم حلول متكاملة لتنظيم الفعاليات بأنواعها، بما يشمل الحفلات الخاصة، المؤتمرات المهنية، المعارض التجارية وفعاليات الشركات، مع التركيز على رضا العميل، والتميز في الجودة، والابتكار في التنفيذ، لخلق تجارب لا تُنسى تعكس هويتنا الاحترافية.
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div className="mt-24">
              <h3 className="text-4xl md:text-5xl font-bold text-primary mb-16 text-center">
                قيم الشركة الأساسية
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Customer Satisfaction */}
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h4 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                    رضا العميل
                  </h4>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    نضع عملاءنا في مقدمة أولوياتنا، ونعمل جاهدين لتلبية رغباتهم وتجاوز توقعاتهم.
                  </p>
                </div>

                {/* Quality */}
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h4 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                    الجودة
                  </h4>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    نلتزم بأعلى معايير الجودة في كل مرحلة من مراحل التخطيط والتنفيذ.
                  </p>
                </div>

                {/* Innovation */}
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h4 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                    الابتكار
                  </h4>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    نؤمن أن كل فعالية فرصة لإبداع جديد، ونسعى باستمرار لتقديم أفكار مبتكرة ومتفردة.
                  </p>
                </div>

                {/* Professionalism */}
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h4 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                    الاحترافية
                  </h4>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    نعتني بكل تفصيل ونلتزم بالدقة والمصداقية في تنفيذ أعمالنا.
                  </p>
                </div>

                {/* Continuous Development */}
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 md:col-span-2 lg:col-span-1">
                  <h4 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                    التطوير المستمر
                  </h4>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    نواكب أحدث التوجهات العالمية في مجال الفعاليات لنقدم لعملائنا أفضل ما توصلت إليه الصناعة.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">

            <h3 className="text-3xl font-bold mb-6">عوالي طويق</h3>
            <p className="text-white/80 mb-6 max-w-3xl mx-auto text-xl">
              ماننظم لك حفلة .. نعيشها معك
            </p>
            <div className="text-white/90 mb-12 max-w-3xl mx-auto text-lg">
              <p className="mb-2">تواصل معنا</p>
              <p>hello@awalituwiq.com</p>
            </div>
            <div className="border-t border-white/20 pt-8">
              <p className="text-white/60 text-lg">
                © 2025 عوالي طويق. جميع الحقوق محفوظة.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;