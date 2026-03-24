export function itemsExist(items){
  return items !== undefined && items.length > 0;
}

class RegistryHandler
{
  handlers = [];

  constructor() 
  {
    let port = window.location.port;
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    this.socket = new WebSocket(`${protocol}://${window.location.hostname}:${port}`);

    this.socket.onopen = () => {
      console.log('Connected to item sync');
    };
    this.socket.onclose = () => {
      console.log('Disconnected from item sync');
    };
    this.socket.onmessage = async (msg) => {
      try {
        const event = JSON.parse(await msg.data.text());
        this.receiveEvent(event);
      } catch {}
    };
  }
    broadcastEvent(type, payload) {
    const event = { type, payload };
    this.socket.send(JSON.stringify(event));
  }

  addHandler(handler) {
    this.handlers.push(handler);
  }

  removeHandler(handler) {
    this.handlers = this.handlers.filter((h) => h !== handler);
  }

  receiveEvent(event) {
    this.handlers.forEach((handler) => handler(event));
  }
}

export const registryHandler = new RegistryHandler();

export async function removeRegistryItem(itemIndex, username, setRegistryFunction) {
  console.log("Delete:", username, itemIndex);
  await fetch(`/api/registry/${username}/${itemIndex}`, {
    method: 'DELETE',
  });
  setRegistryItems(prev => prev.filter(i => i.id !== itemIndex));
  registryHandler.broadcastEvent('ITEM_DELETED', {id: itemIndex});
}