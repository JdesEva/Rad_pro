import React from 'react'
import './node.scss'

import { Button, message } from 'antd'

const onAdd = (props, ev, e) => {
    e.stopPropagation()
    console.log(ev, props)
    ev.onAdd(props)
}

const Remove = (props, ev, e) => {
    e.stopPropagation()
    if (!props.children) {
        console.log(ev, props)
        ev.onRemove(props)
    } else {
        message.warn('存在子节点无法删除！')
    }
}

export default function Node(props, ev) {
    return (
        <div className="tree-button-node-group">
            <div>{props.name}</div>
            <Button shape="circle" icon="plus" size="small" onClick={e => onAdd(props, ev, e)}></Button>
            <Button shape="circle" icon="minus" size="small" onClick={e => Remove(props, ev, e)}></Button>
        </div>
    )
}