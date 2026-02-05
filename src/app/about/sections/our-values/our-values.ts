import { Component } from '@angular/core';

@Component({
  selector: 'app-our-values',
  imports: [],
  templateUrl: './our-values.html',
  styleUrl: './our-values.css',
})
export class OurValues {
  discoveryItems = [
    {
      id: 1,
      title: 'الجودة أولاً',
      description: 'محتوى مدروس ومكتوب بخبرة',
      icon: 'track_changes',
    },
    {
      id: 2,
      title: 'تركيز عملي',
      description: 'أمثلة واقعية يمكنك تطبيقها اليوم',
      icon: 'electric_bolt',
    },
    { id: 3, title: 'المجتمع', description: 'تعلم مع آلاف المصورين', icon: 'handshake' },
    { id: 3, title: 'دائماً محدث', description: 'أحدث الاتجاهات وأفضل الممارسات', icon: 'sync' },
  ];
}
