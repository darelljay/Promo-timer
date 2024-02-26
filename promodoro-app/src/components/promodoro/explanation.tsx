import * as S from "./explanayionStyle";

const Explanation = () =>{
    return(
        <>
        <S.Backgournd>
            <S.Box>
            <S.HeadingText>An online Pomodoro Timer to boost<p>your productivity</p></S.HeadingText>
            <S.paragraphWrap>
            <S.SubHeaddingText>What is Pomofocus? <div></div></S.SubHeaddingText>
            <p className="p">
            Pomofocus is a customizable pomodoro timer that works on desktop & mobile browser. The aim of this app is to help you focus on any task you are working on, such as study, writing, or coding. This app is inspired by <span className="highlight">Pomodoro Technique</span> which is a time management method developed by Francesco Cirillo.
            </p>
            </S.paragraphWrap>
            <S.paragraphWrap>
                <S.SubHeaddingText>What is Pomodoro Technique?<div></div></S.SubHeaddingText>
                <p className="p">
                The Pomodoro Technique is created by Francesco Cirillo for a more productive way to work and study. The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks. Each interval is known as a pomodoro, from the Italian word for 'tomato', after the tomato-shaped kitchen timer that Cirillo used as a university student. - <a className="highlight" href="https://en.wikipedia.org/wiki/Pomodoro_Technique">Wikipedia</a>
                </p>
            </S.paragraphWrap>
            <S.paragraphWrap>
                <S.SubHeaddingText>How to use the Pomodoro Timer?<div></div></S.SubHeaddingText>
                <p className="p">
                    <ol>
                        <li>Add tasks to work on today</li>
                        <li>Set estimate pomodoros (1 = 25min of work) for each tasks</li>
                        <li>Select a task to work on</li>
                        <li>Start timer and focus on the task for 25 minutes</li>
                        <li>Take a break for 5 minutes when the alarm ring</li>
                        <li>Iterate 3-5 until you finish the tasks</li>
                    </ol>
                </p>
            </S.paragraphWrap>
            <S.paragraphWrap>
                <S.SubHeaddingText>Basic Features<div></div></S.SubHeaddingText>
                <p className="p">
                    <ul>
                        <li>Estimate Finish Time: Get an estimate of the time required to complete your daily tasks.</li>
                        <li> Add Templates: Save your repetitive tasks as templates and add them with just one click.</li>
                        <li>Visual Reports: See how much time you've focused each day, week, and month.</li>
                        <li>Custom Settings: Personalize your focus/break time, alarm sounds, background sounds, and more.</li>
                    </ul>
                </p>
            </S.paragraphWrap>
            </S.Box>
        </S.Backgournd>
        </>
    )
}

export default Explanation;