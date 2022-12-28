import { ARCHERY_LANGUAGE } from '../tools/constants'
import { en } from '../Locales/Eng'
import { uz } from '../Locales/Uz'
import { ru } from '../Locales/Ru'

export const getLanguage = () => {
    return localStorage.getItem(ARCHERY_LANGUAGE)
}

export const getText = word => {
    return getLanguage() === 'en' ? en[word] : getLanguage() === 'uz' ? uz[word] : ru[word]
}