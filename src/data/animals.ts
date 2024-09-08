import type { AnimalFeature, AnimalRole } from '../types'

const baseFolder = '/projects/animals'

export const animalsPhotos = {
    dashboard: {
        src: `${baseFolder}/dashboard.png`,
        alt: 'Main Animal Dashboard',
    },
    newAnimal: {
        src: `${baseFolder}/new-animal.png`,
        alt: 'Create Animal',
        className: 'max-h-[600px]',
    },
    editAnimal: {
        src: `${baseFolder}/edit-animal.png`,
        alt: 'Update Animal',
        className: 'max-h-[600px]',
    },
    animalHome: {
        src: `${baseFolder}/home.png`,
        alt: "Animal's Home Page",
    },
    animalHomeExpanded: {
        src: `${baseFolder}/home-exp.png`,
        alt: "Animal's Home Page History Expanded",
    },
    animalVetExpanded: {
        src: `${baseFolder}/vet-exp.png`,
        alt: "Animal's Vet History Expanded",
    },
    newRecord: {
        src: `${baseFolder}/new-record.png`,
        alt: 'Create Record for Animal',
        className: 'max-h-[600px]',
    },
    editRecord: {
        src: `${baseFolder}/edit-record.png`,
        alt: 'Update Record for Animal',
        className: 'max-h-[600px]',
    },
}

export const animalsFeatures: AnimalFeature[] = [
    {
        feature: 'Application',
        purpose: 'Receive information of interested person',
        mvp: true,
    },
    {
        element: 'Adopt',
        purpose: 'Record keeping',
        reason: 'Regulatory reasons',
        mvp: true,
    },
    {
        element: 'Foster',
        purpose: 'Contact information',
        reason: 'Acquired easily through other means',
        mvp: false,
    },
    {
        element: 'Volunteer',
        purpose: 'Contact information',
        reason: 'Acquired easily through other means',
        mvp: false,
    },
    {
        feature: 'Adoption',
        mvp: false,
    },
    { feature: 'Profile' },
    {
        element: 'Admin',
        purpose: 'Record keeping/management',
        reason: 'Private storage of data',
        mvp: true,
    },
    {
        element: ' User',
        purpose: 'User easily updates/controls information',
        reason: 'Not required to maintain records, would reduce admin burden',
        mvp: false,
    },
    {
        element: 'Organization',
        purpose: 'User easily updates/controls information',
        reason: 'Not required to maintain records, would reduce admin burden',
        mvp: false,
    },
    {
        element: 'Animal',
        purpose: 'Record keeping, marketing, inventory management',
        reason: 'Foundational Feature',
        mvp: true,
    },
    {
        feature: 'Referral',
        purpose: 'Track interest',
        reason: 'Minimal interest/admin burden',
        mvp: false,
    },
    {
        feature: 'Lead',
        purpose: 'Track interest',
        reason: 'Minimal interest/admin burden',
        mvp: false,
    },
    { feature: 'Transaction' },
    {
        element: 'Add manual transactions',
        purpose: 'Record keeping, send receipts',
        reason: 'Accounting, can be manual, third part options available',
        mvp: false,
    },
    {
        element: 'Payment Processing',
        purpose: 'Automation',
        reason: 'Reduce admin burden',
        mvp: false,
    },
    {
        feature: 'Transfer',
        purpose: 'Inventory management',
        reason: 'Foundational Feature',
        mvp: true,
    },
    {
        feature: 'Log',
        purpose: 'Display information',
        reason: 'Nice to have',
        mvp: false,
    },
    { element: 'Donation' },
    { element: 'Fosters' },
    { element: 'Adoptions' },
    {
        feature: 'Inventory',
        mvp: true,
    },
    {
        element: 'Status',
        purpose: 'Determine Availability',
        reason: 'Correct advertisement',
        mvp: true,
    },
    { detail: 'Adoptable' },
    { detail: 'Adopted' },
    {
        element: 'Location',
        mvp: false,
    },
    {
        detail: 'Storage',
        purpose: 'Control of inventory, placing dogs with fosters',
        reason: 'Place dogs quicker in foster homes, better matching',
        mvp: false,
    },
    {
        detail: 'Event',
        purpose: 'Easier for Adopters to find dogs',
        reason: 'Marketing',
        mvp: true,
    },
    {
        feature: 'Records',
        purpose: 'Regulatory Requirement',
        reason: 'Foundational Feature',
        mvp: true,
    },
    { element: 'Vet' },
    { element: 'Licensing' },
    { element: 'Ownership' },
    { element: 'Adoption' },
    {
        feature: 'Admin',
        purpose: 'Management of Data',
        reason: 'Required to replace missing functionality',
        mvp: true,
    },
    {
        feature: 'Marketing Page',
        purpose: 'Display dogs to potential adopters',
        reason: 'Best way to get them to their forever home',
        mvp: true,
    },
    {
        element: 'Third Party Services',
        purpose: 'more visibility',
        reason: 'Reduce Admin burden, automation',
        mvp: true,
    },
    { detail: 'Facebook' },
    { detail: 'Pet Finder' },
]

export const animalRoles: AnimalRole[] = [
    {
        role: 'Dogs/Cats',
        action: 'Admin Action',
        storage: 'Animal Profile',
    },
    { element: 'Vet' },
    { element: 'Vet Records' },
    { detail: 'Microchip' },
    { element: 'Breed' },
    { element: 'Pictures' },
    { element: 'Behavioral Information' },
    {
        element: 'Foster History',
        action: 'Transfer',
        storage: 'Foster Log',
    },
    {
        element: 'Applications',
        action: 'Adopter Application',
    },
    {
        element: 'Fee',
        action: 'Transaction',
    },
    {
        element: 'Adoption Location',
        action: 'Admin Action/Default',
    },
    {
        role: 'Fosters',
        action: 'Application/Referral/Lead',
        storage: 'Admin/User Profile',
    },
    {
        element: 'Contact Information',
        action: 'Initial/Delayed/Profile/Update',
    },
    { detail: 'Name' },
    { detail: 'Address' },
    { detail: 'Phone' },
    { detail: 'Background?' },
    { detail: 'Email' },
    { detail: 'Method Preference' },
    {
        element: 'Foster Dog History',
        action: 'Dog Transfer',
    },
    {
        element: 'Preferences',
        action: 'Application/Profile/Update',
    },
    { detail: 'breed' },
    { detail: 'size' },
    { detail: 'age' },
    {
        element: 'Home check time restrictions',
        action: 'Application/Profile/Update',
    },
    {
        role: 'Volunteers',
        action: 'Application/Referral/Lead',
        storage: 'Admin/User Profile',
    },
    {
        element: 'Name',
        action: 'Initial/Delayed/Profile/Update',
    },
    {
        element: 'Contact Information',
        action: 'Initial/Delayed/Profile/Update',
    },
    {
        element: 'Title/Authorization/Responsibility',
        action: 'Admin Action',
    },
    {
        element: 'Emergency Contact',
        action: 'Initial/Delayed/Profile/Update',
    },
    {
        element: 'Organization Contact',
        action: 'Admin Action',
    },
    { detail: 'Authorization for Vet' },
    { detail: 'Incident with Animal' },
    { detail: 'On-Call Contact' },
    {
        role: 'Admins',
        action: 'Request/Referral',
        storage: 'Admin/User Profile',
    },
    {
        element: 'Name',
        action: 'Initial/Delayed/Profile/Update',
    },
    {
        element: 'Title',
        action: 'Admin Action',
    },
    {
        element: 'Contact Information',
        action: 'Initial/Delayed/Profile/Update',
    },
    {
        element: 'Authorizations',
        action: 'Admin Action',
        storage: 'Admin Profile only?',
    },
    {
        element: 'Responsibilities',
        action: 'Admin Action',
    },
    {
        role: 'Adopters',
        storage: 'Admin/User? Profile',
    },
    {
        element: 'Name',
        action: 'Application/Referral/Lead',
    },
    {
        element: 'Contact Information',
        action: 'Application/Referral/Lead',
    },
    {
        element: 'About',
        action: 'Application',
    },
    { detail: 'Occupation' },
    { detail: 'Vet' },
    { detail: 'Travel?' },
    {
        element: 'Preferences',
        action: 'Application',
    },
    {
        element: 'Household',
        action: 'Application',
    },
    { detail: 'members (humans, animals)' },
    { detail: 'type' },
    { detail: 'yard info' },
    { detail: 'own/rent' },
    { detail: 'history/future (move/transfer)' },
    {
        element: 'Pet',
        action: 'Application',
    },
    { detail: 'Who for?/Responsible' },
    { detail: 'Reason' },
    { detail: 'Pet location day/night' },
    { detail: 'Pet - time alone' },
    { detail: 'Behavioral issues?' },
    {
        element: 'Pet History',
        action: 'Application',
    },
    { detail: 'given away to shelter or other?' },
    {
        element: 'Allowed to Adopt?',
        action: 'Admin Action',
        storage: 'Admin Profile',
    },
    {
        element: 'Accepted/Denied?',
        action: 'Admin Action',
    },
    {
        element: 'Notes',
        action: 'Admin Action',
        storage: 'Admin Profile',
    },
    {
        role: 'Vets',
        action: 'Admin Action/Lead',
        storage: 'Admin/Org Profile',
    },
    { element: 'Contact Information' },
    { element: 'Price' },
    {
        element: 'Availability',
        action: 'Admin/User Input',
    },
    {
        role: 'Locations',
        action: 'Admin Action/Lead',
        storage: 'Admin/Org Profile',
    },
    { element: 'Store Number' },
    { element: 'Store Address' },
    { element: 'Store Name/Label' },
    { element: 'Store Manager/Contacts' },
    { element: 'Adoption Events' },
    { detail: 'Time' },
    { detail: 'Restrictions (qty/type)' },
    { detail: 'Compensation' },
    { detail: 'Inventory' },
    { element: 'Top Dog' },
    { detail: 'Contact Information' },
    {
        role: 'Sponsors',
        action: 'Admin Action/Donate',
        storage: 'Admin/Org Profile',
    },
    { element: 'Contact Information' },
    { element: 'Person' },
    {
        element: 'Donation History',
        action: 'Transaction',
        storage: 'Donation Log',
    },
    { detail: 'amount' },
    { detail: 'type' },
    { detail: 'collection means' },
    { element: 'Contact Schedule/Reminder' },
    {
        role: 'Boarding Locations',
        action: 'Admin Action/Lead',
        storage: 'Admin/Org Profile',
    },
    { element: 'Contact Information' },
    { element: 'Price' },
    {
        element: 'Availability',
        action: 'Admin/User Input',
    },
    {
        role: 'Relinquishers',
        action: 'Form/Admin Action',
        storage: 'Admin/User Profile',
    },
    { element: 'Contact Information' },
    { element: 'Type' },
    { detail: 'Random person' },
    { detail: 'Previous owner' },
    { detail: 'Trapper' },
    { element: 'Found' },
    { detail: 'how' },
    { detail: 'where' },
    { detail: 'when' },
    { element: 'Any Information?' },
    { detail: 'sick/injured' },
    { detail: 'behavior' },
    { detail: 'vet/records' },
    { element: 'Fee?' },
    { element: 'Reason?' },
]
