import {createContext, useState, useContext, useRef} from 'react'
// import workOne from '/work-1.png'
// import workTwo from '/work-2.png'
// import workThree from '/work-3.png'
// import workFour from '/work-4.png'

const WorkContext = createContext()

export const WorkContextProvider = ({children}) => {
    const [works, setWorks] = useState([
        {
            projectName: 'Project Name',
            shortDescription: 'Et harum quidem rerum facilis est et expedita distincto',
            largeDescription: 'Quis eleifend quam adipiscing vitae proin sagittis. Nunc sed augue lacus viverra vitae congue. Amet justo donec enim diam vulputate ut pharetra sit amet. Risus sed vulputate odio ut enim blandit volutpat.',
            imgSrc: '/work-1.png',
            id: 1
        },
        {
            projectName: 'Project Name',
            shortDescription: 'Et harum quidem rerum facilis est et expedita distincto',
            largeDescription: 'Quis eleifend quam adipiscing vitae proin sagittis. Nunc sed augue lacus viverra vitae congue. Amet justo donec enim diam vulputate ut pharetra sit amet. Risus sed vulputate odio ut enim blandit volutpat.',
            imgSrc: '/work-2.png',
            id: 2
        },
        {
            projectName: 'Project Name',
            shortDescription: 'Et harum quidem rerum facilis est et expedita distincto',
            largeDescription: 'Quis eleifend quam adipiscing vitae proin sagittis. Nunc sed augue lacus viverra vitae congue. Amet justo donec enim diam vulputate ut pharetra sit amet. Risus sed vulputate odio ut enim blandit volutpat.',
            imgSrc: '/work-3.png',
            id: 3
        },
        {
            projectName: 'Project Name',
            shortDescription: 'Et harum quidem rerum facilis est et expedita distincto',
            largeDescription: 'Quis eleifend quam adipiscing vitae proin sagittis. Nunc sed augue lacus viverra vitae congue. Amet justo donec enim diam vulputate ut pharetra sit amet. Risus sed vulputate odio ut enim blandit volutpat.',
            imgSrc: '/work-4.png',
            id: 4
        },
    ])

    const contactSection = useRef(null)
    const headerSection = useRef(null)

    return (
        <WorkContext.Provider value={{works, contactSection, headerSection}}>
            {children}
        </WorkContext.Provider>

    )
}

export const useWorkContext = () => useContext(WorkContext)