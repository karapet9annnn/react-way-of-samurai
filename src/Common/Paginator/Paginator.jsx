import React, { useState } from "react"
import css from './Paginator.module.css'

const Paginator = ({ totalItemsCount, usersToShow, currentPage, onPageChange, fragmentSize = 10 }) => {
    let pageSize = Math.ceil(totalItemsCount / usersToShow)
    let pages = []

    for (let i = 1; i <= pageSize; i++) {
        pages.push(i)
    }

    let fragmentCount = Math.ceil(pageSize / fragmentSize) //19 fragments(Portions) // 18.8 ceiling
    // console.log(fragmentCount)
    let [fragment, setFragment] = useState(1) 
    window.stating = fragment
    let fragmentStartPageNumber = (fragment - 1) * fragmentSize 
    let fragmentFinishPageNumber = fragment * fragmentSize + 1
    // console.log(fragmentStartPageNumber)
    // // console.log(fragmentFinishPageNumber)


    return <div className={css.pagesCounter}>
        {
        fragmentStartPageNumber > 1  &&  <button onClick={() => { setFragment(fragment - 1) } }>Prev</button>
        }
        {
            pages
            .filter(page => page < fragmentFinishPageNumber && page > fragmentStartPageNumber) 
            .map((elem, index) => {
                return <p key={index}
                    className={currentPage === elem ? css.activePage : css.page}
                    onClick={() => { onPageChange(elem) }}
                >{elem}</p>
            })
        }
        {
            fragmentCount > fragment && <button onClick={
                () => {setFragment(fragment + 1)} 
            }>Next</button>
        }
    </div>
}

export default Paginator;