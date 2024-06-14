const domain = createDomain()
const event = createEvent()
const store = createStore(0)
const effect = createEffect()
const domainEvent = domain.createEvent()
const scope = fork(domain)
const node = createNode()

const a = attach({effect})
const b = clearNode(node)
const c = combine({store})
const d = createApi(store, {})
const g = launch(event, null)
const h = merge([event])
const i = restore(event, null)
const j = sample({source: store, clock: event})
const k = split(event, {})
const l = withRegion(node, () => {})
const o = serialize(scope)
const p = scopeBind(domainEvent)
const q = allSettled(domainEvent, {scope})
