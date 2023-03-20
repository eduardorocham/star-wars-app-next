//Next
import { useRouter } from 'next/router'

//Styles
import styles from './Pagination.module.css'

type PaginationProps = {
    pages: number,
    path: string
}

export const Pagination = ({ pages, path } : PaginationProps) => {
    const router = useRouter();
    const { page } = router.query;

    const updatePageQuery = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (page !== e.currentTarget.value) {
            router.push({
                pathname: `${path}`,
                query: { page: e.currentTarget.value }
            })
        }
    }

    return (
        <div className={styles.pagination}>
            {Array.from(Array(pages), (item, index) => {
                return (
                    <button
                        value={index + 1}
                        className={Number(page) === index + 1 ? styles.buttonPaginationActive : styles.buttonPagination}
                        onClick={updatePageQuery}
                        key={index}
                    >
                        {index + 1}
                    </button>
                )
            })}
        </div>
    )
}