import React from 'react'
import LanguageCard from '../../common/LanguageCard'
import SeeMorebtn from '../../common/SeeMorebtn'

const LanguagesIntro = () => {
  return (
    <div className=' w-full px-3 py-2 flex flex-col justify-center items-center'>
      <div className=' flex w-full justify-between items-center'>
        <h1 className=' subTitle text-gray-500 dark:text-gray-200'>Languages</h1>
        <SeeMorebtn text="See More" />
      </div>
      <div className="container mt-2 flex flex-wrap justify-center items-center p-3 gap-7">
        <LanguageCard src="/logos/html.png" text="HTML" />
        <LanguageCard src="/logos/css.png" text="CSS" />
        <LanguageCard src="/logos/js.png" text="JS" />
        <LanguageCard src="/logos/sass.png" text="SASS" />
        <LanguageCard src="/logos/react.png" text="REACT" />
        <LanguageCard src="/logos/git.png" text="GIT" />
      </div>
    </div>
  )
}

export default LanguagesIntro
