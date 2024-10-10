import { Icons } from './icons';
import { TextLogo } from './text-logo';

export const Footer = () => {
  return (
    <>
      <img
        className='max-w-[90%] md:max-w-[50%] mx-auto'
        src='/people/team.gif'
        alt=''
      />
      <div className='flex flex-col justify-between bg-black text-white w-full rounded-t-3xl min-h-[30vh] pt-8 px-8 md:pt-14 md:px-16 pb-10'>
        <div className='flex justify-between h-full flex-col md:flex-row md:gap-0 gap-10 pb-10'>
          <div>
            <TextLogo char='full' className='w-48 h-fit pb-2' />
            <p className='text-white/50 w-72 text-sm'>
              Разработчики, гении хакатонов и просто крутая команда из ИТМО!
            </p>
          </div>
          <div className='flex text-xl md:gap-10 h-fit flex-col md:flex-row'>
            <div>
              <p>Главная</p>
              <p>Проекты</p>
              <p>Награды</p>
            </div>
            <div>
              <p>Команда</p>
              <p>Блог</p>
            </div>
            <div className='flex items-center md:items-start pt-10 md:pt-0'>
              <div className='flex h-fit items-center gap-5'>
                <Icons.telegram className='cursor-pointer' />
                <Icons.youtube className='cursor-pointer' />
              </div>
            </div>
          </div>
        </div>
        <p>© 2024, Шампиньоны</p>
      </div>
    </>
  );
};
