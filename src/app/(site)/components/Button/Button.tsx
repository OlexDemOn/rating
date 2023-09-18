import { ButtonProps } from './Button.props';
import styles from './Button.module.scss'
import cn from 'classnames'
import { MdKeyboardArrowRight } from 'react-icons/md'

export default function Button({ appearance, arrow = 'none', children, className, ...props }: ButtonProps): JSX.Element {

    return (
        <button className={cn(styles.button, className, {
            [styles.primary]: appearance === 'primary',
            [styles.ghost]: appearance === 'ghost',
        })}
            {...props}
        >
            {children}
            {arrow !== 'none' &&
                <MdKeyboardArrowRight size={20} className={cn(styles.arrow, {
                    [styles.down]: arrow === 'down'
                })} />
            }
        </button>
    )
}