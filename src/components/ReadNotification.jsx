import React from 'react'

const ReadNotification = ({hide}) => {
    return (
        <div className='read-notification'>
            <div className="read-close">
                <span className="material-symbols-outlined" onClick={()=>{hide(false)}}>cancel</span>
            </div>
            <div className="read-topic">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad consequuntur vel laborum omnis placeat tempora ut excepturi nihil doloremque blanditiis ducimus mollitia saepe ipsam vero, magni debitis a amet nostrum.
            </div>
            <div className="read-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt laborum odit at totam, impedit consequatur natus cum quasi porro, modi, fugiat quae ab dolorum rerum sapiente ipsum veniam? Eligendi, eveniet!
                Facere quia quaerat deleniti, eos laudantium expedita. Consectetur reprehenderit error hic consequuntur delectus accusantium tempore saepe assumenda amet suscipit explicabo, dolores, asperiores voluptates vel eveniet aliquid est perferendis deserunt at.
                Totam, fugiat velit. Dignissimos perferendis aliquid eum. Officiis a quidem architecto quis ipsa alias saepe laboriosam? Assumenda exercitationem, voluptatibus nam nesciunt delectus temporibus porro enim fugiat repellendus fugit animi autem?
                Itaque quas atque veniam tempora, harum maiores? Cumque magni qui sit atque praesentium id perferendis! Architecto, eveniet in! Cumque, ipsum aspernatur atque omnis vitae est labore voluptatem ipsa eum repellendus!
                Quis aspernatur, quod aut iure non facilis praesentium facere, voluptatum adipisci eaque hic repellat eius culpa similique animi ratione accusamus. Optio deserunt architecto perferendis accusantium? Id magnam dolorum fuga cupiditate.
            </div>
        </div>
    )
}

export default ReadNotification
