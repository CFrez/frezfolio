import React, { useCallback } from 'react'

import type { AnimalFeature, AnimalRole } from '../../types'
import { animalRoles, animalsFeatures } from '../../data'

export const AnimalRoles: React.FC = () => {
    const generateTableRow = useCallback((role: AnimalRole) => {
        const string = role.role || role.element || role.detail
        return (
            <tr
                key={string}
                className={
                    (role.role && 'primary') ||
                    (role.element && 'element') ||
                    (role.detail && 'detail')
                }
            >
                <td className="main">{string}</td>
                <td>{role.action}</td>
                <td>{role.storage}</td>
            </tr>
        )
    }, [])

    return (
        <table className="animal">
            <thead>
                <tr>
                    <th>Role</th>
                    <th>Action</th>
                    <th>Storage</th>
                </tr>
            </thead>
            <tbody>{animalRoles.map(generateTableRow)}</tbody>
        </table>
    )
}

export const AnimalFeatures: React.FC = () => {
    const generateTableRow = useCallback((feature: AnimalFeature) => {
        const string = feature.feature || feature.element || feature.detail
        return (
            <tr
                key={string}
                className={
                    (feature.feature && 'primary') ||
                    (feature.element && 'element') ||
                    (feature.detail && 'detail')
                }
            >
                <td className="main">{string}</td>
                <td>{feature.purpose}</td>
                <td>{feature.reason}</td>
                <td className="mvp">{feature.mvp && '✓'}</td>
            </tr>
        )
    }, [])

    return (
        <table className="animal">
            <thead>
                <tr>
                    <th>Feature</th>
                    <th>Purpose</th>
                    <th>Reason</th>
                    <th>MVP?</th>
                </tr>
            </thead>
            <tbody>{animalsFeatures.map(generateTableRow)}</tbody>
        </table>
    )
}
