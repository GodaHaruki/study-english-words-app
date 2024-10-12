import { grid } from '../grid';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export function CustomCard(props: { class:string; link: string; title: string; desc: string; titleClass?: string; descClass?: string; }) {
    return (
        <Link href={props.link} className={props.class+" col-span-10 col-start-2 card card-normal no-underline"}>
            <div className='col-span-10 card-body'>
                <h2 className={props.titleClass+" card-title text-3xl"}>{props.title}</h2>
                <p className={props.descClass+" card-text"}>{props.desc}</p>
            </div>
        </Link>
    );
}

export default function Study() {
  return (
    <div className={grid}>
        <Header/>
        <h2 className='col-span-12 mb-0 mt-5 bg-gradient-to-r from-primary to-primary-content bg-clip-text text-center text-3xl text-transparent'>
            学習方法を選択してください
        </h2>
        <CustomCard class="bg-slate-100 rounded-lg" link="./study/e2j" title="英語を日本語に" desc="英単語の意味を回答する問題です"/>
        <CustomCard class="bg-slate-100 rounded-lg" link="./study/j2e" title="日本語を英語に" desc="日本語の意味を回答する問題です"/>
        <CustomCard class="bg-slate-100 rounded-lg" link="./study/dict" title="単語帳" desc="訳や例文などが載っている単語帳です"/>
        <Footer/>
    </div>
  );
}
