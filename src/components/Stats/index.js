import React, { Component } from 'react';

const Stats = ({ stats }) => {
    if (!stats) {
        return <span> ... isLoading ...</span>;
    }

    return (
        <span className="stats">
            {stats.error && <span>Error </span>}
            {stats.idLoading && <span>isLoading </span>}
            {stats.downloads !== null && <span> {stats.downloads} </span>}
        </span>
    );
};

export default Stats;
