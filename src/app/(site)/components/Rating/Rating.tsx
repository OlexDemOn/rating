'use client'
import { RatingProps } from './Rating.props';
import styles from './Rating.module.scss'
import cn from 'classnames'
import { AiFillStar } from 'react-icons/ai'
import { KeyboardEvent, useEffect, useState } from 'react';

export default function Rating({ isEditable = false, rating, setRating, ...props }: RatingProps): JSX.Element {

    // const [ratingArray, setRatingArray] = useState();
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructRating(rating);
    }, [rating])

    const constructRating = (currentRating: number) => {
        const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
            return (
                <span
                    key={i}
                    className={cn(styles.star, {
                        [styles.filled]: i < currentRating,
                        [styles.editable]: isEditable
                    })}
                    onMouseEnter={() => changeDisplay(i + 1)}
                    onMouseLeave={() => changeDisplay(rating)}
                    onClick={() => onClick(i + 1)}
                >
                    <AiFillStar
                        tabIndex={isEditable ? 0 : -1}
                        onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && handleSpace(i + 1, e)}
                    />
                </span>
            )
        })
        setRatingArray(updatedArray);
    }

    const changeDisplay = (i: number) => {
        if (!isEditable) return
        constructRating(i);
    }

    const onClick = (i: number) => {
        if (!isEditable || !setRating) return
        setRating(i);
    }

    const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
        if (e.code !== 'Space' || !setRating) return;
        setRating(i)
    }

    return (
        <div {...props}>
            {ratingArray.map((r, i) => <span key={i}>{r}</span>)}
        </div>
    )
}