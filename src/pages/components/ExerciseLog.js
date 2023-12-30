import React from "react";
import '../styles/analytics.css';

const ExerciseLog = ({ userActivity }) => {
    if (!userActivity) {
        // Handle the case where userActivity is undefined
        // For example, return null or show a loading spinner
        return null;
    }

    return (
        <div className="exercise-log">
            <table>
                <tbody>
                {Array.from({ length: 6 }).map((_, rowIndex) => (
                    <tr key={rowIndex}>
                        {userActivity.slice(rowIndex * 12, (rowIndex + 1) * 12).map((activity, index) => (
                            <td key={index} className={activity ? 'exercise-day' : ''}></td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ExerciseLog;
