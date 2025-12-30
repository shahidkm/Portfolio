import React from 'react';

function Developer() {
    return (
        <div className="relative w-screen h-screen  overflow-hidden">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover -z-10"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="/assets/TechBg.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="text-center text-white mt-24">
                <h1
                    className="text-[13vw] font-extrabold leading-none"
                    style={{
                        fontFamily: 'Monoton, sans-serif',

                    }}
                >
                    FULL — STACK
                </h1>
            </div>
            <div className='flex items-center justify-center  min-w-[100vw] mt-12'>
                <div className=' min-w-[70vw] ml-12'>
                <h1
                    className="text-[9vw] font-extrabold leading-none mt-12"
                    style={{
                        fontFamily: 'Monoton, sans-serif',

                    }}
                >
                    DEVELOPER
                </h1>
                </div>
                <div className='min-w-[10vw] mr-12'>
                In my previous role at Bridgeon Solution, I developed Labour Link, a job hiring platform using ASP.NET Core Microservices and integrated with SQL Server, MongoDB, Redis, RabbitMQ, and Docker. I also built a Business Financial ERP Application with Clean Architecture, CQRS, and MediatR, integrating SQL Server, MongoDB, Redis, and Resend for email verification.  
                </div>
            </div>
        </div>
    );
}

export default Developer;
