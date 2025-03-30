import LocaleSwitcherSelect from '@/components/LocaleSwitcherSelect';
import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('HomePage');

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="text-center space-y-4">
        <LocaleSwitcherSelect />
        <h1 className="text-4xl font-bold text-gray-800">{t('title')}</h1>
        <p className="text-gray-600 text-lg">{t('description')}</p>
      </div>
    </main>
  );
}
