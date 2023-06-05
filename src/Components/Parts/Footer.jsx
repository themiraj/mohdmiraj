import React from 'react'
import { jsonData } from '../../data'

const Footer = () => {
    return (
        <footer className="p-3 text-center"><h6 className="mb-3">{jsonData.profile.firstName} {jsonData.profile.lastName}</h6><p>mohdmiraj © All CopyRights Reserved {new Date().getFullYear()}</p></footer>
    )
}

export default Footer