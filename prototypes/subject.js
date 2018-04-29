export default function Subject({id = null, name, aka, units = [] }) {
  this.id = id
  this.name = name;
  this.aka = aka;
  this.units = units;
  this.createdAt = Date.now();
  this.lastOpening = null;
}
