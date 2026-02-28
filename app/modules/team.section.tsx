import { SupporterCard } from '@/components/supporter-card';
import { TeamCard } from '@/components/team-card';
import { People } from '@/types/people.interface';

const team: People[] = [
  {
    name: 'Дьяконов Александр',
    role: 'devops',
    contact: 'https://t.me/keine_salz',
    image: '/people/sasha.png',
  },
  {
    name: 'Настя Богданова',
    role: 'бизнес-аналитик',
    contact: 'https://t.me/learn_how_to_use_a_cart',
    image: '/people/nastya.jpeg',
  },
  {
    name: 'Мишель Де Джофрой',
    role: 'frontend-разработчик',
    contact: 'https://t.me/mikedegeofroy',
    image: '/people/mike.jpeg',
  },
  {
    name: 'Тимур Валеев',
    role: 'frontend-разработчик',
    contact: 'https://t.me/PriestFaria',
    image: '/people/timur.jpg',
  },
  {
    name: 'Настя Карандашева',
    role: 'дизайнер',
    contact: 'https://t.me/antero13',
    image: '/people/nastya_k.jpg',
  },
  {
    name: 'Вика Кулешова',
    role: 'дизайнер',
    contact: 'https://t.me/vktorriaa',
    image: '/people/vika.png',
  },
  {
    name: 'Митя Мамченко',
    role: 'frontend-разработчик',
    contact: 'https://t.me/aliasmityai',
    image: '/people/mitya.jpeg',
  },
  {
    name: 'Ваня Тарасов',
    role: 'backend-разработчик',
    contact: 'https://t.me/vaniog',
    image: '/people/vanya.jpeg',
  },
];

const supporters: People[] = [
  {
    name: 'Женя Сальников',
    role: 'frontend-разработчик',
    contact: 'https://t.me/evsalik',
    image: '/people/zhenya.png',
  },
  {
    name: 'Олег Селянта',
    role: 'frontend-разработчик',
    contact: 'https://t.me/olevegic',
    image: '/people/oleg.png',
  },
  {
    name: 'Кирилл Захаров',
    role: 'ML-разработчик',
    contact: 'https://t.me/kilagen',
    image: '/people/kirill.png',
  },
  {
    name: 'Лиля Яфарова',
    role: 'UX/UI дизайнер',
    contact: 'https://t.me/liliiyyaf',
    image: '/people/lilya.png',
  },
];

export const TeamSection = () => {
  return (
    <div id='team' className='w-[90%] mx-auto min-h-screen pt-24'>
      <p className='text-center text-xl pb-12'>Команда</p>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 w-[90%] mx-auto gap-5'>
        {team.map((person, index) => (
          <TeamCard key={`${index}_${person.name}`} person={person} />
        ))}
      </div>
      <p className='text-center text-xl pt-16'>
        Отдельное спасибо тем, кто поддержал нас!
      </p>
      <p className='text-center text-muted-foreground text-xl pb-10'>
        Целуем в носик за ваши пару строчек
      </p>
      <div className='w-[90%] flex justify-center flex-wrap mx-auto gap-5 pb-5'>
        {supporters.slice(0, 2).map((person, index) => (
          <SupporterCard
            className={'gap-16'}
            key={`${index}_${person.name}`}
            person={person}
          />
        ))}
      </div>
      <div className='w-[90%] flex justify-center flex-wrap mx-auto gap-5'>
        {supporters.slice(2, 4).map((person, index) => (
          <SupporterCard key={`${index}_${person.name}`} person={person} />
        ))}
      </div>
    </div>
  );
};
