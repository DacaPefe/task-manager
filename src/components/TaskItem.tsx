


export function TaskItem( {  title }: { title: string } ) {
    return (
        <>
        <input type="checkbox"  className="w-4 h-4 rounded-full border border-border bg-surface checked:bg-primary checked:border-primary"/>
        <p className="text-sm font-medium text-text">{title}</p>
        </>
    )
}

export default TaskItem;