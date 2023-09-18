import Image from 'next/image';
import styles from './page.module.scss';
import P from '../components/Ptag/Ptag';
import Link from 'next/link';
import { getContent } from '../../../../api/content';

export default async function Alias({ params }: { params: { alias: string } }) {

    const content = await getContent();

    console.log(params);


    return (
        <div className={styles.cart_container}>
            {content.map((el: any) =>
                <Link href={`${params.alias}/${el.route}`} key={el.title}>
                    <div className={styles.cart}>
                        <div className={styles.img_block}>
                            <Image
                                src={`${el.img}`}
                                alt='cover'
                                fill
                            />
                        </div>
                        <span>
                            <P size='l'>{el.title}</P>
                            <P size='s'>{el.description}</P>
                        </span>
                    </div>
                </Link>
            )}

        </div>
    )

}