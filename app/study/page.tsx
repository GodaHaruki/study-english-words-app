import { grid } from '../grid';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

function CustomCard(props: {
  className: string;
  link: string;
  title: string;
  desc: string;
  titleClassName?: string;
  descClassName?: string;
}) {
  return (
    <Link
      href={props.link}
      className={
        props.className +
        ' card card-normal col-span-10 col-start-2 no-underline'
      }
    >
      <div className='card-body col-span-10'>
        <h2 className={props.titleClassName + ' card-title text-3xl'}>
          {props.title}
        </h2>
        <p className={props.descClassName + ' card-text'}>{props.desc}</p>
      </div>
    </Link>
  );
}

export default function Study() {
  return (
    <div className={grid}>
      <Header />
      <h2 className='col-span-12 mb-0 mt-5 bg-gradient-to-r from-primary to-primary-content bg-clip-text text-center text-3xl text-transparent'>
        学習方法を選択してください
      </h2>
      {[
        {
          link: './E2J',
          title: '英語を日本語に',
          desc: '英単語の意味を回答する問題です',
        },
        {
          link: './J2E',
          title: '日本語を英語に',
          desc: '日本語の意味を回答する問題です',
        },
        {
          link: './dict',
          title: '単語帳',
          desc: '訳や例文などが載っている単語帳です',
        },
      ].map((props) => (
        <CustomCard
          className='rounded-lg bg-slate-100'
          key={props.title}
          {...props}
        />
      ))}
      <Footer />
    </div>
  );
}
