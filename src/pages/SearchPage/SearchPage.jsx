import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { jobs } from '../../components/FeaturedJobs/FeaturedJobs'
import JobCard from '../../components/JobCard/JobCard'

const SearchPage = () => {
    return (
        <div>
            <Navbar />
            <div>
                <section className="featured-jobs sectionPadding ">
                    <h2 className="mb-4">Search Result</h2>
                    <p className="mb-4">Showing Result For : Enginnering and Data Job</p>
                    <div className="d-flex gap-4 flex-wrap">
                        {jobs.map((job, index) => (
                            <JobCard key={index} job={job} />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}

export default SearchPage