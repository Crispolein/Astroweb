# Astroweb

Astroweb es un sitio web de divulgación astronómica hecho con Django. Publica noticias, artículos y una galería, y tiene una sección Acerca de. El contenido se gestiona desde el mismo sitio.

## Qué incluye

- Publicaciones de cuatro tipos: noticia, artículo, galería y acerca de.
- Estados de publicación: borrador, publicado y archivado.
- Editor de texto enriquecido con CKEditor y subida de imágenes.
- Etiquetas con `django-taggit` y comentarios con estado.
- Modo claro y oscuro, y página 404 propia.

## Stack

- Python 3.9, Django 3.2
- PostgreSQL con `psycopg2`
- `django-ckeditor`, `django-taggit`, `django-storages` y Google Cloud Storage
- Google App Engine con `gunicorn` (ver `app.yaml`)

## Cómo correrlo

Requiere Python 3.9 y una base PostgreSQL local. El archivo `astro_web/settings.py` no está en el repo porque `.gitignore` lo excluye. Hay que crearlo con `INSTALLED_APPS`, `DATABASES` y `STATIC_ROOT` antes de seguir.

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

El sitio queda en `http://127.0.0.1:8000/`.

## Estructura

```
astro_web/       configuración, wsgi y asgi
home/            página de inicio
publicaciones/   modelos, vistas y plantillas de noticias, artículos, galería y acerca de
comentarios/     comentarios de las publicaciones
etiqueta/        etiquetas
imagen/          imágenes de las publicaciones
usuarios/        cuentas y permisos
templates/       base, home y 404
app.yaml         despliegue en App Engine
```

## Estado

Primer commit en octubre de 2024. Último commit en marzo de 2025.
