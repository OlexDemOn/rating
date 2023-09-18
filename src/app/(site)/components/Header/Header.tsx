import styles from './Header.module.scss';
import { HeaderProps } from './Header.props';
import cn from 'classnames';

export default function Header({ className, ...props }: HeaderProps): JSX.Element {
    return (
        <div className={cn(className, styles.header)}>
            Header
        </div>
        // <div {...props} className={cn(className, styles.footer)}>
        // Footer
        // </div>
    )
}