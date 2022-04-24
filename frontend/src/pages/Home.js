import { useTranslation } from 'react-i18next';

function Home() {
  const { t, i18n } = useTranslation();
    return (
      <div>
        <h1>Home Page</h1>
        {t('title')}
      </div>
    );
  }
  
  export default Home;
  