export default function MissionSection({missionStatement, missionStatementHeading}) {

    return (
        <div className="mission container lg:max-w-4xl lg:px-0 px-5 py-[80px]">
            <h2 className="text-lg tracking-tight lg:text-2xl lg:text-center lg:mb-[20px]">{missionStatementHeading}</h2>
        <p className="opacity-80 text-base lg:text-xl lg:leading-relaxed lg:text-center">{missionStatement}</p>
        </div>
    )

}